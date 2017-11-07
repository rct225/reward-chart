const Rewards = {
  getBehaviors() {
    return fetch('/behaviors')
      .then(res => res.json());
  }
}

export default Rewards;
