function calculateRatio(allData) {
  return allData.map((data, index) => {
    if (index === 0 || allData[index - 1].time === 0) return { ...data, ratio: 0 };

    const ratio = data.time / allData[index - 1].time;
    return {
      ...data,
      ratio: Number(ratio.toFixed(2)),
    };
  });
}

module.exports = calculateRatio;
