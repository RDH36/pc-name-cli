#!/usr/bin/env node
import { Command } from "commander"
import os from "os"
import { execSync } from "child_process"
import chalk from "chalk"
import figlet from "figlet"
const program = new Command()

program
  .version("1.0.0")
  .description(chalk.green("Simple CLI to look name of the PC and change it"))
  .addHelpText("beforeAll", figlet.textSync("PC Name CLI"))

program
  .command("show")
  .description("Show the current name of the PC")
  .action(() => {
    const name = os.hostname()
    console.log(chalk.green(`The current name of the PC is ${name}`))
  })

//update the name of the PC

program.parse(process.argv)
