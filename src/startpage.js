export class StartPage{
  constructor(){
    this.heading = "Welcome to Helland.pw";
    this.mainContent = {};
    this.mainContent.articles = [
      {title: 'Testcontent 1', abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet fermentum mi. Suspendisse dictum, ante quis pellentesque mollis, augue nibh posuere magna, eget condimentum mi nisi at purus. Ut vel lectus tristique, maximus magna eu, accumsan purus', url: '/article/1'},
      {title: 'More testcontent', abstract: 'Morbi consequat, tellus quis consequat condimentum, est ipsum eleifend odio, quis blandit ante turpis ut velit. Donec vel finibus massa. Phasellus dignissim quam sit amet ante vestibulum consequat.', url: '/article/2'},
      {title: 'Last testcontent', abstract: ' Donec pharetra aliquet neque, non consequat odio bibendum tincidunt. Suspendisse venenatis sapien at leo luctus accumsan. Etiam leo ex, lacinia id turpis sed, consequat elementum velit. Sed sit amet nunc quis felis sollicitudin convallis.', url: '/article/3'}
      ];
    this.sidebar = {};
    this.sidebar.contactInfo = { name: 'John Doe', email: 'doe@example.org', about: 'Hi, I\'m John! '};
  }
}
