import type PlayerApi from '$lib/interfaces/PlayerApi.js';

export const load = ({ params }): PlayerApi => {
  return { name: params.player };
};
