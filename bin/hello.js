#!/usr/bin/env node
'use strict';

const { setTimeout } = require('timers');
// const prompt = require('cli-prompt');
const inquirer = require('inquirer');
const ora = require('ora');
const download = require('download-git-repo');
const selectShell = require('select-shell');

const chalk = require('chalk');
const program = require('commander');
const shell = require('shelljs');
const welcome = `
______     ______     ______     __   __     __     
/\\  ___\\   /\\  __ \\   /\\  __ \\   /\\ "-.\\ \\   /\\ \\   
\\ \\ \\____  \\ \\ \\/\\ \\  \\ \\ \\/\\ \\  \\ \\ \\-.  \\  \\ \\ \\  
 \\ \\_____\\  \\ \\_____\\  \\ \\_____\\  \\ \\_\\\\"\\_\\  \\ \\_\\ 
  \\/_____/   \\/_____/   \\/_____/   \\/_/ \\/_/   \\/_/ 
`;

const TYPE_OF_APP = {
  'REACT': 1,
  'REACT-NATIVE': 2,
  'NODEJS': 3,
};

program
  .command('init')
  .description('Init boilerplate of cooni generate app.')
  .action(function() {
    // sed -i 's/original/new/g' file.txt
    // https://askubuntu.com/questions/20414/find-and-replace-text-within-a-file-using-commands
    console.log(chalk.cyanBright(welcome));
    console.log(chalk.yellow('Select which app you want to generate from cooni.'));
    const list = selectShell(
      {
        pointer: ' ▸ ',
        pointerColor: 'yellow',
        checked: ' ◉  ',
        unchecked:' ◎  ',
        checkedColor: 'blue',
        msgCancel: 'No selected options!',
        msgCancelColor: 'orange',
        multiSelect: false,
        inverse: true,
        prepend: true
      }
    );
    
    var stream = process.stdin;
    
    list.option(' React App with typescript  ', TYPE_OF_APP['REACT'])
        .option(' React Native App with typescript  ', TYPE_OF_APP['REACT-NATIVE'])
        .option(' Node.js app with typescript  ', TYPE_OF_APP['NODEJS'])
        .list();
    
    list.on('select', function(options){
      console.log(chalk.yellow('Select the name of the app.'));
      inquirer.prompt([{
        name: 'value',
        message: 'Name of your app(camel-case): ',
      }]).then(answer => {
        const nameOfApp = answer.value;
        if (!nameOfApp) {
          console.log(chalk.redBright('Please provide name of your app.'));
          process.exit(0);
        } else if (!isCamelCase(nameOfApp)) {
          console.log(chalk.redBright('Your app name should be camel-case.'));
          process.exit(0);
        }

        // console.log(options[0].value);
        if (options[0].value === TYPE_OF_APP['REACT']) {
  
        } else if (options[0].value === TYPE_OF_APP['REACT-NATIVE']) {

        } else { // NODEJS

        }

        console.log(chalk.gray('Creating app ' + nameOfApp + '.'));
        const spinner = ora('creating app ' + nameOfApp + '...');
        spinner.start();
        shell.exec('mkdir ' + nameOfApp);
        shell.exec('cd ' + nameOfApp);
        // if (exists(tmp)) rm(tmp)
        // download(template, tmp, { clone }, err => {
        //   spinner.stop()
        //   if (err) logger.fatal('Failed to download repo ' + template + ': ' + err.message.trim())
        //   generate(name, tmp, to, err => {
        //     if (err) logger.fatal(err)
        //     console.log()
        //     logger.success('Generated "%s".', name)
        //   })
        // })
        setTimeout(function() {
          spinner.stop();
          console.log(chalk.green(answer.value + ' created.'));
          console.log(chalk.cyanBright('cd ' + answer.value + ' and cooni start.'));
          process.exit(0);
        }, 2000);
      });
    });
    
    list.on('cancel', function(options){
      console.log('Cancel list, '+ options.length +' options selected');
      process.exit(0);
    });
  });

program
  .command('react-component <c>')
  .description('create react-component. Must run command on root of cooni\'s react-app.')
  .action(function(c) {
    console.log('creating ' + c + ' react componet...');
  });

program.parse(process.argv);

// program
//   .arguments('<file>')
//   .option('-u, --username <username>', 'The user to authenticate as')
//   .option('-p, --password <password>', 'The user\'s password')
//   .action(function(file) {
//     console.log('user: %s pass: %s file: %s',
//     program.username, program.password, file);
//   })
//   .parse(process.argv);

String.prototype.toCamelCase = function(cap1st) {
  'use strict';
  return ((cap1st ? '-' : '') + this).replace(/-+([^-])/g, function(a, b) {
      return b.toUpperCase();
  });
};

function isCamelCase(str) {
  var strArr = str.split('');
  var string = '';
  for(var i in strArr){
    if (strArr[i].toUpperCase() === strArr[i]) {
      string += '-'+strArr[i].toLowerCase();
    } else {
      string += strArr[i];
    }
  }

  if (string.toCamelCase(true) === str) {
    return true;
  } else{
    return false;
  }
}
