# To deploy the website, setup your keys:
#
# 	sudo pip install awscli
# 	aws configure
#
# Then run:
# 	make deploy

deploy:
	aws s3 sync ../fiftyshades s3://fiftyshades.seanssmith.com\
		--exclude ".git/*"\
		--exclude ".gitignore"\
		--exclude "Makefile"\
		--exclude "*.DS_Store"\
		--delete

