angular.module('app').controller('globalNavDemoCtrl', function ($scope) {
  $scope.globalNav = {
    pageTitle: {
      title: 'Criminal Justice System',
      type: 'text',
      ref: '#'
    },
    navItems: [
      {
        title: 'Getting Started',
        type: 'href',
        ref: '#!/modules'
      },
      {
        title: 'CSS Elements',
        type: 'href',
        ref: '#!/modules'
      },
      {
        title: 'UI Components',
        type: 'href',
        ref: '#!/modules'
      },
      {
        title: 'Ng Modules',
        type: 'href',
        ref: '#!/modules'
      },
      {
        title: 'API',
        type: 'href',
        ref: '#!/modules'
      }
    ]
  };
});
