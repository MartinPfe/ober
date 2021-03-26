import faker from "faker";

const mock = {
  user: {
    get full() {
      return {
        uid: faker.random.uuid(),
        displayName: "Test",
      };
    },
  },
};

export default mock;
