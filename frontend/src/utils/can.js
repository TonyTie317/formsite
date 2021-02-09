import { AbilityBuilder, Ability } from "@casl/ability";

const defineAbilitiesFor = (userInfo) => {
  const { can, build } = new AbilityBuilder(Ability);

  if (userInfo && userInfo.isOhs) {
    can("read", "Dashboard");
  }

  return build();
};

export default defineAbilitiesFor;
