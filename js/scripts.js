$(document).ready(() => {
  // collapse nav when user clicks on a nav link
  $('body').on('click', (event) => {
    if ($(event.target).is('.nav-link')) {
      $('#nav-toggle').prop('checked', false);
    }
  });

  // TODO: implement function to close nav when user clicks away from 'nav-expanded' element

  /* --------
     TESTING
     --------
  */
  // trying to make a 'close nav' function:

  // $('body').on('click', function(event) {
  //   console.log(event);
  //   if ($(event.target).is('nav')) {
  //     console.log('clicked nav');
  //   } else {
  //     console.log('clicked away from nav');

  //     if ($('#nav-toggle').prop('checked')) {
  //       console.log('nav expanded');
  //       // $('#nav-toggle').prop('checked', false);
  //     } else {
  //       console.log('nav hidden');
  //     }
  //   }
  // });

  // $('body').on('click', function(event) {
  //   if (!$(event.target).is('nav')) {
  //     console.log('clicked away from nav');
  //   } else {
  //     console.log('clicked nav');
  //   }
  // });
});
