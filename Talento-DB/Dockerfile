FROM mongo:latest

# Create data folders
COPY Advert.json /Advert.json
COPY User.json /User.json
COPY Company.json /Company.json
COPY script.sh /script.sh

RUN chmod +x script.sh
CMD [ "./script.sh" ]

ENTRYPOINT [ ]