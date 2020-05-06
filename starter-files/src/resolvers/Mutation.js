export default {
  async createDog(parent, { name, breed }, context, info) {
    return { name, breed };
  },
};
