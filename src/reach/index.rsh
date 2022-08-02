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

  Deployer.publish();
  commit();

  Attacher.publish();
  commit();

  Attacher.interact.test();
  Deployer.interact.test();

  exit(); 
})
