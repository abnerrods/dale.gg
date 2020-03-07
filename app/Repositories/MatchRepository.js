/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Summoner = use('App/Models/Summoner');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Matchlist = use('App/Models/Matchlist');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const MatchDto = use('App/Models/MatchDto');

const ParticipantRepository = use('App/Repositories/ParticipantRepository');

const getMatchDto = require('../Utils/RiotAPI/getMatchDto');

class MatchRepository {
  constructor() {
    this.participantRepository = new ParticipantRepository();
  }

  async store(accountId, summonerRegion, match) {
    const summoner = await Summoner.findByOrFail({
      account_id: accountId,
      region: summonerRegion,
    });

    const matchDtoAPI = await getMatchDto(summonerRegion, match.gameId);
    const { participants } = matchDtoAPI;

    const summonerMatchlist = await Matchlist.create({
      lane: match.lane,
      game_id: match.gameId,
      platform_id: match.platformId,
      role: match.role,
      season: match.season,
      summoner_id: summoner.id,
    });

    const matchDto = await MatchDto.create({
      matchlist_id: summonerMatchlist.id,
      season_id: matchDtoAPI.seasonId,
      queue_id: matchDtoAPI.queueId,
      game_id: matchDtoAPI.gameId,
      platform_id: matchDtoAPI.platformId,
    });

    const promises = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const participant of participants) {
      promises.push(this.participantRepository.store(participant, matchDto.id));
    }
    await Promise.all(promises);

    await summonerMatchlist.matchdto().save(matchDto);
    await summoner.matchs().save(summonerMatchlist);
  }
}

module.exports = MatchRepository;