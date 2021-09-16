import { version } from "os";

export function createVisitor(name, age, ticketId) {
  const obj ={}
  obj["name"] = name;
  obj["age"] = age;
  obj["ticketId"] = ticketId;
  return obj;
}

export function revokeTicket(visitor) {
  const obj = visitor;
  obj["ticketId"] = null;
  return obj
}

export function ticketStatus(tickets, ticketId) {
  const obj = tickets
  if (!tickets.hasOwnProperty(ticketId)) {return "unknown ticket id"};
  if(!obj[ticketId]) {return 'not sold'};
  if(obj[ticketId]) {return 'sold to ' + tickets[ticketId]};
}

export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!'; //retorne ticketid de tickets se este não for nulo, se for, retorna a string
}

export function gtcVersion(visitor) {
  return visitor.gtc?.version; //o?.testa se o gtc existe primeiro, se ele nao existir nao da o erro de nao conseguir ler undefined
}
