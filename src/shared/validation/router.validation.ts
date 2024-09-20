import * as zod from "zod";

const ipv4Regex =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const ipv6Regex =
  /^(([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:))|(([0-9a-fA-F]{1,4}:){1,7}:)|(([0-9a-fA-F]{1,4}:){1,6}(:[0-9a-fA-F]{1,4}){1,7})$/;

export const routerSchema = zod.object({
  IP: zod
    .string({ required_error: "O IP é obrigatorio!" })
    .regex(ipv4Regex, { message: "O IP é invalido!" }),
  IPv6: zod
    .string({ required_error: "O IPv6 é obrigatorio!" })
    .regex(ipv6Regex, { message: "O IPv6 é invalido!" }),
  model: zod.string({ required_error: "O modelo é obrigatorio " }),
});
