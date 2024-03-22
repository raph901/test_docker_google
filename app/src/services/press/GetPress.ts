import { gql, useQuery } from '@apollo/client';
import appoloClient from '@/lib/AppoloClient/AppoloClient';

type Press = {
	logo: string,
	content: string,
	link: string,
	date: string
}

type Data = {
	posts: {
		nodes: [{
			title: string,
			press: {
				logo: {
					sourceUrl: string
				},
				content: string,
				link: string,
				date: string,
			}
		}]
	}
}

const GET_PRESSES_GQL = gql`{
    posts(where: {categoryName: "press"}, first: 100) {
        nodes {
            title,
            press {
                logo {
                    sourceUrl
                },
                content,
                link,
                date
            }
        }
    }
}`;

const GetPress = ()=> {
	const {data} = useQuery(GET_PRESSES_GQL, {client: appoloClient});
	const _data: Data = data as Data;
	const presses: Press[] = [];

	if(_data) {
		_data.posts.nodes.forEach((node) => {
			presses.push({
				content: node.press.content,
				link: node.press?.link ?? "",
				date: node.press.date,
				logo: node.press.logo?.sourceUrl ?? "",
			});
		});
	}

	return presses;
}

export default GetPress;
