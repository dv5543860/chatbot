# Use an official Rasa image as a parent image
FROM rasa/rasa:latest

# Set the working directory in the container
WORKDIR /app

# Copy the Rasa project files into the container
COPY rasa /app

# Install any additional dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 5005 for Rasa
EXPOSE 5005

# Run the Rasa server
CMD ["rasa", "run", "--cors", "*"]
