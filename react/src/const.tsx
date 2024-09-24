export type UniMen = Record<string, { uid: string; name: string; order: number; twitter: string; type: string; birthday: string; debut: string }>;

// APIエンドポイント
// 本番
export const URL_BASE = "https://api.xx-dule.com/prd/";
export const SITE_TITLE = "XXじゅ～る"
export const SITE_DESCRIPTION = "XX[非公式]ファンメイドスケジューラー"

export const channelParams: UniMen = {
  peko: { uid: "UC1DCedRgGHBdm81E1llLhOQ", name: "兎田 ぺこら", twitter: "usadapekora", order: 0, type: "member", birthday: "01/12", debut: "07/17" },
  marin: { uid: "UCCzUftO8KOVkV4wQG1vkUvg", name: "宝鐘 マリン", twitter: "houshoumarine", order: 1, type: "member", birthday: "07/30", debut: "08/11" },
  holo_office: { uid: "UCJFZiqLMntJufDCHc6bQixg", name: "ホロライブ公式", twitter: "hololivetv", order: 2, type: "office", birthday: "12/02", debut: "12/02" },
  
  other: { uid: "", name: "未登録チャンネル", twitter: "", order: 8, type: "ohter", birthday: "", debut: "" },
};
