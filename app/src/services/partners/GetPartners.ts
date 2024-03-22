import {gql, useQuery} from '@apollo/client'
import appoloClient from '@/lib/AppoloClient/AppoloClient';

interface Partner {
	profilUrl: string,
	partnerUrl: string,
	description: string
}

interface Data {
	posts : {
		nodes : [{
			title: string,
			partner: {
				profil: {
					id: string,
					sourceUrl: string
				},
				partner: {
					id: string,
					sourceUrl: string
				}
				description: string
			}
		}]
	}
}

const GET_PARTNERS_GQL = gql`{
    posts(where: {categoryName: "partner"}) {
        nodes {
            title,
            partner {
                profil {
                    id,
                    sourceUrl
                },
                partner {
                    id,
                    sourceUrl
                },
                description
            }
        }
    }
}`;

function GetPartners(): Partner[] {
	const {data} = useQuery(GET_PARTNERS_GQL, {client: appoloClient});
	const _data: Data = data as Data;
	const partners: Partner[] = [];

	if(_data) {
		_data.posts.nodes.forEach((node) => {
			partners.push({
				profilUrl: node.partner.profil?.sourceUrl ?? "",
				partnerUrl: node.partner.partner?.sourceUrl ?? "",
				description: node.partner?.description ?? ""
			});
		});
	}

	return partners;
}

export default GetPartners;
