import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UtilitiesService{
  formatDate = (timestamp: any) => {
    // Extract seconds from the timestamp object (From the seconds property)
    const seconds = timestamp.seconds
    // Create a Date object from the seconds
    const date = new Date(seconds * 1000)
    const formattedDate = date.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })
    return formattedDate
  }
}
