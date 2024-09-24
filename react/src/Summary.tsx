import { Typography, styled } from "@mui/material";
import { getOrder } from "./ChannelFillter";
import { ChannelIconComp } from "./ChannelIconComp";
import { channelParams } from "./const";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { format, parse, compareAsc, differenceInDays } from "date-fns";
import { ja } from "date-fns/locale";

import "./Summary.css";

type SummaryProps = {
  channelInfo: any[]; // チャンネル情報
};

export const getType = (channel: string): string => {
  const cid = channelParams[channel];
  return cid.type;
};

export const getBirthday = (channel: string, today: Date): Date => {
  const cid = channelParams[channel];
  let mmdd = cid.birthday;
  return getThisYearNextDay(mmdd, today);
};

export const getDebutDay = (channel: string, today: Date): Date => {
  const cid = channelParams[channel];
  let mmdd = cid.debut;
  return getThisYearNextDay(mmdd, today);
};

// 次の記念日を取得
export const getThisYearNextDay = (mmdd: string, today: Date): Date => {
  const bdDate = parse(mmdd, "MM/dd", new Date());

  // 今年の誕生日が終わっているかどうか
  if (compareAsc(today, bdDate) == 1) {
    // 終わっているなら翌年
    const y = String(today.getFullYear() + 1);
    return parse(y + "/" + mmdd, "yyyy/MM/dd", new Date());
  }

  return bdDate;
};

// 次の記念日を取得
export const getToday = (): Date => {
  const dt = new Date();
  //　いったん年月日にパースして時分秒を削除
  const y = dt.getFullYear();
  const m = dt.getMonth() + 1;
  const d = dt.getDate();

  return parse(y + "/" + m + "/" + d, "yyyy/MM/dd", new Date());
};

const TableCellEx = styled(TableCell)`
  padding: 0px;
`;

export const Summary = ({ channelInfo }: SummaryProps) => {
  const rows: any[] = [];
  const today = getToday();

  for (let item of channelInfo) {
    const type = getType(item.channel);
    if (type == "staff") continue;

    const idx = getOrder(item.channel);
    const bd = getBirthday(item.channel, today);
    const diffDayBD = differenceInDays(bd, today);

    const dd = getDebutDay(item.channel, today);
    const diffDayDD = differenceInDays(dd, today);

    // テーブル1行
    rows[idx] = (
      <TableRow key={item.channel} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          <ChannelIconComp key={idx} channel={item.channel} cb={() => {}} imgUrl={item.snippet.thumbnails.default.url} fullName={""} isSelected={true}></ChannelIconComp>
        </TableCell>
        <TableCell align="right">
          {diffDayBD == 0 && (
            <Typography variant="h6" className="gradation">
              TODAY
            </Typography>
          )}
          {diffDayBD != 0 && <Typography variant="h6">{diffDayBD}日</Typography>}

          <Typography variant="caption">({format(bd, "M月d日")})</Typography>
        </TableCell>

        <TableCell align="right">
          {diffDayDD == 0 && (
            <Typography variant="h6" className="gradation">
              TODAY
            </Typography>
          )}
          {diffDayDD != 0 && <Typography variant="h6">{diffDayDD}日</Typography>}

          <Typography variant="caption">({format(dd, "M月d日")})</Typography>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      <TableContainer component={Paper} sx={{ backgroundColor: "#f0f0f4" }}>
        <Table sx={{}} size="small">
          <TableHead>
            <TableRow>
              <TableCellEx align="center" width={"100px"}></TableCellEx>
              <TableCellEx align="center" width={"120px"}>
                誕生日まで
              </TableCellEx>
              <TableCellEx align="right" width={"140px"}>
                デビュー日まで
              </TableCellEx>
              <TableCellEx align="right"></TableCellEx>
            </TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
