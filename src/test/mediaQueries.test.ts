import { MediaQueries } from '../styles/MediaQueries';

describe('MediaQueries', () => {
  it('exporta as queries corretamente', () => {
    expect(MediaQueries.mobile).toContain('@media');
    expect(MediaQueries.tablet).toContain('@media');
    expect(MediaQueries.desktop).toContain('@media');
  });
});
