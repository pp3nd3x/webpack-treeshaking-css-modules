module.exports = api => {
  api.cache(true);
  return {
    presets: [
      require.resolve('@babel/preset-react'),
      [
        require.resolve('@babel/preset-env'),
        {
          modules: false
        }
      ]
    ]
  };
};
