import { client } from "@dex-web/orpc";
import { Text } from "@dex-web/ui";

export default async function Index() {
  const user = await client.user.list({});
  console.log(user);
  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome" className="flex items-center justify-center">
          <Text.Body1 className="animate-bounce">
            Under construction 🚧
          </Text.Body1>
        </div>
      </div>
    </div>
  );
}
