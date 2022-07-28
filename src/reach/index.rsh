'reach 0.1';

const common = {
  ...hasRandom,
  test: Fun([], Null)
}
export const main = Reach.App(() => {
  const Deployer =  Participant('Deployer', {
    ...common,
  });
  const Attacher = Participant('Attacher', {
    ...common
  });

  init();

  Deployer.only(() => {
    interact.test();
  })
  Deployer.publish();
  commit();

  Attacher.only(() => {
    interact.test();
  })
  Attacher.publish();
  commit();

  exit(); 
})
