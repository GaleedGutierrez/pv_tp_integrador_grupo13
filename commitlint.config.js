/** @import { UserConfig } from '@commitlint/types' */

/** @type {UserConfig}  */
const Configuration = {
	extends: ['@commitlint/config-conventional'],
	formatter: '@commitlint/format',
};

export default Configuration;
