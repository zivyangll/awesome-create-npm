module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project',
        default: this.outFolder,
        filter: val => val.toLowerCase(),
        validate: input => {
          if (!input) return 'name is required';
          return true;
        },
      },
      {
        name: 'group',
        message: 'What is your GitHub user/group name',
        store: true,
        validate: input => {
          if (!input) return 'name is required';
          return true;
        },
      },
    ];
  },
  actions: [
    {
      type: 'add',
      files: '**',
      filters: {
        // only for test case, npm will ignore .gitignore
        '.gitignore': false,
      },
    },
    {
      type: 'move',
      patterns: {
        // We keep `.gitignore` as `gitignore` in the project
        // Because when it's published to npm
        // `.gitignore` file will be ignored!
        gitignore: '.gitignore',
      },
    },
  ],
  async completed() {
    this.gitInit();
    await this.npmInstall();
    this.showProjectTips();
  },
};
