export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactSubmission extends ContactFormData {
  id: string;
  timestamp: number;
}

class Storage {
  private submissions: ContactSubmission[] = [];

  async saveContactSubmission(data: ContactFormData): Promise<ContactSubmission> {
    const submission: ContactSubmission = {
      ...data,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };

    this.submissions.push(submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return this.submissions;
  }
}

export const storage = new Storage();