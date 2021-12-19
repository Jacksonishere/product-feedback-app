module ApplicationHelper
  def extends(layout, &block)
    # Make sure it's a string
    layout = layout.to_s

    # If there's no directory component, presume a plain layout name
    layout = "layouts/#{layout}" unless layout.include?('/')

    # Capture the content to be placed inside the extended layout
    @view_flow.get(:layout).replace capture(&block)

    render template: layout
  end


  def show_errors(object, field_name)
    if object.errors.any?
      if !object.errors.messages[field_name].blank?
        object.errors.messages[field_name].join(", ")
      end
    end
  end 

  def is_signup_page?(controller)
    controller_name == controller
  end

  def is_editable?(feedback)
     action_name == "show" && feedback.belongs_to_user?(current_user)
  end
end
