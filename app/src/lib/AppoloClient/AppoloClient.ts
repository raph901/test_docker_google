import {
	ApolloCache,
	ApolloClient,
	DefaultOptions,
	InMemoryCache,
	NormalizedCacheObject
} from '@apollo/client';

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
	return new ApolloClient({
		uri: 'https://php.curedev.work/index.php?graphql',
		cache: new InMemoryCache()
	});
}

const appoloClient = createApolloClient();

export default appoloClient;
