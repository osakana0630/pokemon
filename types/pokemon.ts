type IStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
};

export type IPokemon = {
  id: number;
  name: string;
  jpName: string;
  // 身長
  height: number;
  // 体重
  weight: number;
  // 画像関連
  officialImg: string;
  img: string;
  // ステータス
  stats: IStat[];
};
