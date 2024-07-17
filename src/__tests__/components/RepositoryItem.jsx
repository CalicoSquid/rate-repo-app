import React from 'react';
import { render, screen } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/main/RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        repositories: {
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
            },
          ],
        },
      };

      render(<RepositoryListContainer data={repositories} />);

      const repositoryItems = screen.getAllByTestId('repositoryItem');

      expect(repositoryItems.length).toBe(2);

      expect(repositoryItems[0]).toHaveTextContent('jaredpalmer/formik');
      expect(repositoryItems[1]).toHaveTextContent('async-library/react-async');
    });
  });
});
