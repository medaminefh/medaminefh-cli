import prompts = require("prompts");
import { green, bold, bgLightYellow, bgBlue, lightBlue, blue } from "kolorist";
import terminalImage from "terminal-image";

try {
	(async () => {
		while (true) {
			const result = await prompts([
				{
					name: "pickAQuestion",
					type: () => "select",
					message: "What you want to know about me?",
					initial: 0,
					choices: () => [
						{
							title: "Who am i?",
							value: "whoami",
						},
						{
							title: "Experiences",
							value: "exp",
						},
						{
							title: "Technologies i've worked with",
							value: "techs",
						},
						{
							title: "Contact me",
							value: "contact",
						},
					],
				},
			]);

			const answer = result.pickAQuestion;
			if (answer == "whoami") {
				console.log(await terminalImage.file("me.jpeg", { width: "10%" }));
				console.log(
					"\nThis is " +
						green("Mohamed Amine Fhal") +
						", a self-taught software developer from Tunisia\n"
				);
			} else if (answer == "exp")
				console.log(
					"\nI've +1 year of experience in the frontend and backend web dev\n"
				);
			else if (answer == "techs")
				console.log(
					"\nI've used various technologies in my journey, but most of them are in the " +
						bgLightYellow(bold(" JS ")) +
						" & " +
						bgBlue(bold(" Python ")) +
						" Ecosystems, such as React, Vue, Flask, Django, Node(Express), GraphQL, and many more...\n"
				);
			else if (answer == "contact") {
				console.log("\nYou can find me on\n");
				console.log("Github : " + "https://github.com/medaminefh\n");
				console.log(
					blue("Linkedin") +
						" : " +
						"https://linkedin.com/in/mohamed-amine-fhal\n"
				);
				console.log(
					lightBlue("Twitter") + " : " + "https://twitter.com/medaminefh\n\n"
				);
			} else return;
		}
	})();
} catch (cancelled) {
	//console.log(cancelled.message);
	process.exit(1);
}
