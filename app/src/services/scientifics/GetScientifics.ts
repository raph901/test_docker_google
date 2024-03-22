import {gql, useQuery} from '@apollo/client'
import appoloClient from '@/lib/AppoloClient/AppoloClient';

type Scientific = {
	profilUrl: string,
	alt: string,
	name: string,
	lastName: string,
	role: string,
	title: string,
	description: string,
	img1: string,
	img2: string,
}

type Data = {
	posts: {
		nodes: [{
			title: string,
			scientific: {
				profil: {
					sourceUrl: string
				},
				name: string,
				lastname: string,
				role: string,
				title: string,
				description: string,
				logo1: {
					sourceUrl: string
				},
				logo2: {
					sourceUrl: string
				}
			}
		}]
	}
}

const GET_SCIENTIFIC_GQL = gql`{
    posts(where: {categoryName: "scientific"}) {
        nodes {
            title,
            scientific {
                profil {
                    sourceUrl
                },
                name,
                lastname,
                role,
                title,
                description,
                logo1 {
                    sourceUrl
                },
                logo2 {
                    sourceUrl
                }
            }
        }
    }
}`;

function GetScientifics(): Scientific[] {
	const {data} = useQuery(GET_SCIENTIFIC_GQL, {client: appoloClient});
	const _data: Data = data as Data;
	const scientifics: Scientific[] = [];

	if(_data) {
		_data.posts.nodes.forEach((node) => {
			scientifics.push({
				profilUrl: node.scientific.profil?.sourceUrl ?? "",
				name: node.scientific.name,
				lastName: node.scientific.lastname,
				alt: `${node.scientific.name} ${node.scientific.lastname}`,
				role: node.scientific?.role ?? "",
				title: node.scientific?.title ?? "",
				description: node.scientific?.description ?? "",
				img1: node.scientific.logo1?.sourceUrl ?? "",
				img2: node.scientific.logo2?.sourceUrl ?? ""
			});
		});
	}

	return scientifics;
}

export default GetScientifics;
