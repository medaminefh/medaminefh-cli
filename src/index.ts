import fs from "node:fs";
import prompts from "prompts";
import { green, bold, bgLightYellow, bgBlue, lightBlue, blue } from "kolorist";
import { exit, cwd } from "node:process";

try {
	const data = JSON.parse(fs.readFileSync(cwd() + "/src/data.json", "utf-8"));
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
						{
							title: "Quit",
							value: "quit",
						},
					],
				},
			]);

			const answer = result.pickAQuestion;
			if (answer == "whoami") {
				console.log(
					"\nThis is " +
						green("Mohamed Amine Fhal") +
						", a self-taught software developer from Tunisia\n"
				);
			} else if (answer == "exp") {
				console.log(data.experiences);
				console.log(
					"\nI've +1 year of experience in the frontend and backend web dev\n"
				);
			} else if (answer == "techs")
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
			} else {
				console.log("Thanks for visiting! 👋");
				return;
			}
		}
	})();
} catch (cancelled) {
	exit(1);
}
