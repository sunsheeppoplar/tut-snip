require 'rails_helper'

describe "homepage features" do
	it "has link to artist index" do
		visit "/"
		expect(page).to have_css("a", :href => "/artists")
	end

	it "has link to paintings index" do
		visit "/"
		expect(page).to have_css("a", :href => "/paintings")
	end

	it "can navigate to artist index" do
		visit "/"
		index = page.find("a", :href => "/artists")
		click_link(index)
		expect(current_path).to eq("/artists")
	end

	it "can navigate to paintings index" do
		visit "/"
		index = page.find("a", :href => "/paintings")
		click_link(index)
		expect(current_path).to eq("/paintings")
	end

end