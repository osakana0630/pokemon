import { Stats } from "@/constants/stat";
import { Types } from "@/constants/type";

type IStatNames = keyof typeof Stats;
type IStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: IStatNames;
  };
};

export type ITypeNames = keyof typeof Types;

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
  // フレーバーテキスト
  flavorText: "";
  types: ITypeNames[];
};
