import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

if (process.env.VR === 'true') {
  initStoryshots({
    suite: '',
    test: imageSnapshot({ storybookUrl: 'http://localhost:9009' })
  });
} else {
  test(`Don't fail if not running VR tests`, () => {
    expect(1).toBe(1);
  });
}
