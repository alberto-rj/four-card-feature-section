const intro = document.querySelector('.intro');
const supervidorCard = document.querySelector('.card--supervisor');
const teamBuilderCard = document.querySelector('.card--team-builder');
const karmaCard = document.querySelector('.card--karma');
const calculatorCard = document.querySelector('.card--calculator');

const animatableElements = [
  intro, 
  supervidorCard, 
  teamBuilderCard, 
  karmaCard, 
  calculatorCard
];
const animationClasses = [
  'translate-from-top', 
  'translate-from-right', 
  'translate-from-bottom',
  'translate-from-left',
  'translate-delay-1',
  'translate-delay-2',
  'translate-delay-3',
  'translate-delay-4',
  'translate-delay-5',
  'translate-delay-6',
  'translate-delay-7',
  'translate-delay-8',
  'translate-delay-9',
  'translate-delay-10'
];

const DEVICE_MOBILE = 0;
const DEVICE_TABLET = 1;
const DEVICE_DESKTOP = 2;

let currentDevice = null;

const isMobileDevice = () => window.matchMedia('screen and (max-width: 53.75rem)').matches;

const isTabletDevice = () => window.matchMedia('(min-width: 53.75rem) and (max-width: 64rem)').matches;

const isDesktopDevice = () => window.matchMedia('(min-width: 64rem)').matches;

const getDevice = () => {
  if (isDesktopDevice()) {
    return DEVICE_DESKTOP;
  } else if (isTabletDevice()) {
    return DEVICE_TABLET;
  } else {
    return DEVICE_MOBILE;
  }
};

const removeAnimationClasses = () => {
  animatableElements.forEach(node => {
    animationClasses.forEach(className => node.classList.remove(className));
  });
};

const updateAnimation = device => {
  if (currentDevice === device) return;

  removeAnimationClasses();
  
  intro.classList.add('translate-from-left');
  
  switch (device) {
    case DEVICE_DESKTOP:
      supervidorCard.classList.add('translate-from-left');
      supervidorCard.classList.add('translate-delay-1');

      calculatorCard.classList.add('translate-from-right');
      calculatorCard.classList.add('translate-delay-1');

      teamBuilderCard.classList.add('translate-from-top');
      teamBuilderCard.classList.add('translate-delay-2');

      karmaCard.classList.add('translate-from-bottom');
      karmaCard.classList.add('translate-delay-2');
    break;

    case DEVICE_TABLET:
      supervidorCard.classList.add('translate-from-left');
      supervidorCard.classList.add('translate-delay-1');

      karmaCard.classList.add('translate-from-left');
      karmaCard.classList.add('translate-delay-1');

      teamBuilderCard.classList.add('translate-from-right');
      teamBuilderCard.classList.add('translate-delay-2');

      calculatorCard.classList.add('translate-from-right');
      calculatorCard.classList.add('translate-delay-2');
    break;

    default:
      supervidorCard.classList.add('translate-from-left');
      supervidorCard.classList.add('translate-delay-1');
      
      calculatorCard.classList.add('translate-from-left');
      calculatorCard.classList.add('translate-delay-2');
      

      teamBuilderCard.classList.add('translate-from-left');
      teamBuilderCard.classList.add('translate-delay-3');

      karmaCard.classList.add('translate-from-left');
      karmaCard.classList.add('translate-delay-4');
    break;
  }
  currentDevice = device;
};

const setAnimation = () => updateAnimation(getDevice());

window.addEventListener('resize', setAnimation);

setAnimation();