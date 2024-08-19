# Use an official Rasa image as a parent image
FROM rasa/rasa:latest

# Set the working directory
WORKDIR /app

# Copy the project files into the container
COPY . /app

# Install any additional dependencies
# (Specify dependencies if needed, e.g., for custom actions)
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port the app runs on
EXPOSE 5005

# Define environment variable for Rasa
ENV RASA_X_ENABLED=True

# Run the Rasa server
CMD ["rasa", "run", "--cors", "*"]
