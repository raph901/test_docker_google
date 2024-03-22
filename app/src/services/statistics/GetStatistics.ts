import {gql, useQuery} from '@apollo/client'
import appoloClient from '@/lib/AppoloClient/AppoloClient';
import exp from 'node:constants';

type Statistics = {
	title: string,
	value: number,
	unit: string,
	prefix: string
}

type Data = {
	posts : {
		nodes : [{
			title: string,
			statistics: {
				value: number,
				unit: string,
				prefix: string
			}
		}]
	}
}

const GET_STATISTICS_GQL = gql`{
    posts(where: {categoryName: "statistics"}) {
        nodes {
            title,
            statistics {
                value,
                unit,
				prefix
            }
        }
    }
}`;

function GetStatistics(): Statistics[] {
	const {data} =  useQuery(GET_STATISTICS_GQL, {client: appoloClient});
	const _data: Data = data as Data;
	const statistics: Statistics[] = [];

	if(_data) {
		_data.posts.nodes.forEach((node) => {
			statistics.push({
				title: node.title,
				value: node.statistics.value,
				unit: node.statistics.unit,
				prefix: node.statistics.prefix
			});
		});
	}

	return statistics;
}

export default GetStatistics;
