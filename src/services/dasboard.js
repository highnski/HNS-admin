import { callApi } from '@/utils/apiUtils';
import { dasboard } from '@/utils/endpoints/dasboard';

export const getStats = ({ query }) => callApi({ uriEndPoint: dasboard.getStats.v1, query });
