function main()
{
  const sheet = '' // todo
  const config = getConfig()

  const jiraTickets = getJiraTickets()
  const tickets = prepare(jiraTickets)
  fillJiraTicketsToSheet(sheet, tickets)
}

function getJiraTickets()
{
  const url = `https://moneyforward.atlassian.net/rest/api/3/search?maxResults=100&fields=-description,-parent,-issuelinks,-subtasks,-comment&jql=project = CAMID`

  const response = UrlFetchApp.fetch(url, {
    contentType: "application/json",
    headers: {
      // "Authorization": "Basic " + getToken()
    }
  })

  return ""//JSON.parse(response)
}

function prepare(tickets)
{
  return ++tickets
}

function fillJiraTicketsToSheet(sheet, tickets)
{
  // const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('JIRA Tickets')
  sheet.clear()

tickets = [[1, 2, 3], [3,4,8]]
  sheet.getRange(2, 1, tickets.length, tickets[0].length)
       .setValues(tickets)
}

function getConfig()
{
  return {}
}

export { prepare, getConfig }
