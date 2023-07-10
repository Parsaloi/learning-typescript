import { TranslateClient, TranslateTextCommand, TranslateTextCommandInput, TranslateTextCommandOutput } from "@aws-sdk/client-translate";

const client: TranslateClient = new TranslateClient({ region: "us-west-2" });

const translate = async (text: String) => {
	const params: TranslateTextCommandInput = {
		SourceLanguageCode: 'en',
		TargetLanguageCode: 'fr',
		Text: text
	};
	const command = new TranslateTextCommand(params);
	const data: TranslateTextCommandOutput = await client.send(command);
	console.log(data);
};

export default translate;
