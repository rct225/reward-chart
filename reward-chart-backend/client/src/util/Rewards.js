const Rewards = {
  getBehaviors() {
    return fetch('/behaviors')
      .then(res => res.json());
  },
  createReward(data) {
    return fetch('/rewards', {
      method: 'POST',
      body: JSON.stringify({
        eventDate: data.eventDate,
        behaviorId: data.behaviorId
      })
      // body: JSON.stringify(data)
    }).then(res => res.json());
  }
}

export default Rewards;
