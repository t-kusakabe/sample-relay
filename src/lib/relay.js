import { useMemo } from 'react';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

let relayEnvironment;

const fetchQuery = async (operation, variables, _cacheConfig, _uploadables) => {
  const Token = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;

  return await fetch(process.env.NEXT_PUBLIC_RELAY_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${Token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then((response) => response.json());
};

const createEnvironment = (_initialRecords) => {
  return new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource())
  });
};

export const initEnvironment = (initialRecords) => {
  const environment = relayEnvironment ?? createEnvironment(initialRecords);

  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords));
  }
  if (typeof window === 'undefined') return environment;
  if (!relayEnvironment) relayEnvironment = environment;

  return relayEnvironment;
};

export const useEnvironment = (initialRecords) => {
  const store = useMemo(() => initEnvironment(initialRecords), [initialRecords]);
  return store;
};
