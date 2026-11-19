// デモ用：公開まで10分
export const REVEAL_DELAY_MINUTES = 10;

// 公開日時を計算する
export const getRevealAt = (createdAt) => {
  const date = new Date(createdAt);
  return new Date(
    date.getTime() + REVEAL_DELAY_MINUTES * 60 * 1000
  );
};

// 公開時間を過ぎたか判定する
export const isRevealed = (revealAt) => {
  return new Date() >= new Date(revealAt);
};