import { gql, useQuery } from '@apollo/client';
import appoloClient from '@/lib/AppoloClient/AppoloClient';

type Team = {
	link: string
	firstName: string;
	lastName: string;
	title: string;
}

type Data = {
	posts : {
		nodes : [{
			title: string,
			team: {
				link: {
					sourceUrl: string
				}
				firstname: string,
				lastname: string,
				title: string,
			}
		}]
	}
}

const GET_TEAM_GQL = gql`
{
  posts(where: {categoryName: "team"}, first: 100) {
    nodes {
      title,
      team {
        link {
          sourceUrl
        },
        firstname,
        lastname
      }
    }
  }
}
`;

const GetTeam = () => {
	const {data} =  useQuery(GET_TEAM_GQL, {client: appoloClient});
	const _data: Data = data as Data;
	const teams: Team[] = [];

	if(_data) {
		_data.posts.nodes.forEach((node : any) => {
			teams.push({
				link: node.team?.link.sourceUrl ?? "",
				firstName: node.team.firstname,
				lastName: node.team.lastname,
				title: node.title
			});
		});
	}

	return teams;
}

export default GetTeam;
