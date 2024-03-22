import appoloClient from '@/lib/AppoloClient/AppoloClient';
import {gql, useQuery} from '@apollo/client'

type New = {
    titleNews: string;
    linkNews: string;
}

type Data = {
    posts : {
        nodes : [{
            title: string,
            news: {
                link: string
            }
        }]
    }
}

const GET_NEWS_GQL = gql`{
    posts(where: {categoryName: "news"}) {
        nodes {
            title,
            news {
                link
            }
        }
    }
}`;

function GetNews(): New[] {
    const {data} =  useQuery(GET_NEWS_GQL, {client: appoloClient});
    const _data: Data = data as Data;
    const news: New[] = [];

    if (_data) {
        _data.posts.nodes.forEach((node) => {
            news.push({
                linkNews: node.news?.link ?? "",
                titleNews: node.title
            });
        })
    }

    return news;
}

export default GetNews;
