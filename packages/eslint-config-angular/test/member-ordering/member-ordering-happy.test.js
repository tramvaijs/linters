import { ESLint } from 'eslint';
import path from 'path';
import { fileURLToPath } from 'url';
import memberOrderingConfig from '../../member-ordering/index.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

describe('member-ordering / happy path', () => {
  const cli = new ESLint({
    cwd: path.join(__dirname, '..'),
    overrideConfigFile: true,
    overrideConfig: memberOrderingConfig,
  });

  it('happy', async () => {
    const codeframe = await cli.loadFormatter('codeframe');
    const results = await cli.lintFiles([
      path.join(__dirname, './__fixtures__/member-ordering-happy.fixture.ts'),
    ]);

    expect(codeframe.format(results)).toMatchSnapshot();
  });
});
