export const initialState = {
  // Init some cards
  countLists: 4,
  countCards: 18,
  dragType: "none",
  lists: [
    {
      id: 0,
      name: "Backlog",
      order: 1,
      isDragged: false,
      cards: [
        {
          id: 0,
          content: "Buy coffee for everyone",
          isDragged: false
        },
        {
          id: 1,
          content: "Contact Kaneoh",
          isDragged: false
        },
        {
          id: 2,
          content: "Improve website UI",
          isDragged: false
        },
        {
          id: 3,
          content: "Sales appointment",
          isDragged: false
        },
        {
          id: 4,
          content: "Hire a new manager",
          isDragged: false
        },
        {
          id: 5,
          content: "Create a new logo",
          isDragged: false
        },
        {
          id: 6,
          content: "Appointment with interns",
          isDragged: false
        }
      ]
    },
    {
      id: 1,
      name: "Priorities",
      order: 2,
      isDragged: false,
      cards: [
        {
          id: 7,
          content: "Increase sales revenu by 30% in Q3",
          isDragged: false
        },
        {
          id: 8,
          content: "Launch first international expansion",
          isDragged: false
        },
        {
          id: 9,
          content: "Test new messaging for SMB market",
          isDragged: false
        }
      ]
    },
    {
      id: 2,
      name: "Current",
      order: 3,
      isDragged: false,
      cards: [
        {
          id: 10,
          content: "Website Redesign",
          isDragged: false
        },
        { id: 11, list: "Current", content: "Ship iOS app", isDragged: false },
        {
          id: 12,
          content: "Analytics Data",
          isDragged: false
        },
        {
          id: 13,
          content: "Increase conversion rate by 20% by Q3",
          isDragged: false
        },
        {
          id: 14,
          content: "Develop Engineering Blog",
          isDragged: false
        },
        {
          id: 15,
          content: "Brand Guidelines",
          isDragged: false
        }
      ]
    },
    {
      id: 3,
      name: "Completed",
      order: 4,
      isDragged: false,
      cards: [
        {
          id: 16,
          content: "Social Media Campaign",
          isDragged: false
        },
        {
          id: 17,
          content: "Update Help Documentation",
          isDragged: false
        }
      ]
    }
  ]
};
